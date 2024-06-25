const attributes = [
    "container_id",
    "container_name",
    "severity_number",
    "body",
    "trace_id",
    "span_id",
    "trace_flags",
    "severity.text",
  ];
  const operations = [
    "=",
    "!=",
    "IN",
    "NOT_IN",
    "LIKE",
    "NOT_LIKE",
    "CONTAINS",
];

export {attributes, operations};