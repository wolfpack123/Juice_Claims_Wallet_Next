"use client";

interface DebugFieldProps {
  label?: string;
  value?: string;
}

export function DebugField({
  label = "Debug (remove before prod)",
  value,
}: DebugFieldProps) {
  return (
    <div className="border border-red-400 bg-red-50 text-red-700 p-3 rounded-md text-sm">
      <strong className="block mb-1">{label}</strong>
      <pre className="text-xs overflow-auto">{value ?? "—"}</pre>
    </div>
  );
}
