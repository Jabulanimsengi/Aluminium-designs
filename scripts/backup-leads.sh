#!/usr/bin/env bash
set -euo pipefail

umask 077

DATA_DIR="${LEADS_DATA_PATH:-${MONITORING_EVENTS_PATH:-/var/lib/aluminiumdesigns}}"
BACKUP_DIR="${LEADS_BACKUP_PATH:-/var/backups/aluminiumdesigns}"
RETENTION_DAYS="${LEADS_BACKUP_RETENTION_DAYS:-90}"
SOURCE_FILE="${DATA_DIR}/leads.ndjson"

install -d -m 700 "$DATA_DIR" "$BACKUP_DIR"

if [ ! -s "$SOURCE_FILE" ]; then
  echo "No lead records to back up at $SOURCE_FILE"
  exit 0
fi

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
backup_file="${BACKUP_DIR}/leads-${timestamp}.ndjson.gz"
temp_file="${backup_file}.tmp"

gzip -c "$SOURCE_FILE" > "$temp_file"
chmod 600 "$temp_file"
mv "$temp_file" "$backup_file"
sha256sum "$backup_file" > "${backup_file}.sha256"
chmod 600 "${backup_file}.sha256"

sha256sum -c "${backup_file}.sha256"
gzip -t "$backup_file"
record_count="$(gzip -dc "$backup_file" | wc -l)"

find "$BACKUP_DIR" -type f \
  \( -name 'leads-*.ndjson.gz' -o -name 'leads-*.ndjson.gz.sha256' \) \
  -mtime "+$RETENTION_DAYS" -delete

echo "Lead backup created and verified: $backup_file ($record_count records)"
