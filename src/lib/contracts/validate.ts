import { ajv } from "./ajv";
import { registerSchemas } from "./schemas";

let registered = false;

function ensureRegistered() {
    if (!registered) {
        registerSchemas();
        registered = true;
    }
}

export function validateOrThrow<T>(schemaId: string, data: any): T {
    ensureRegistered();
    const validate = ajv.getSchema(schemaId);
    if (!validate) {
        const err = new Error(`SCHEMA_NOT_FOUND:${schemaId}`);
    (err as any).status = 500;
    throw err;
  }
  const ok = validate(data);
  if (!ok) {
    const err = new Error("SCHEMA_VALIDATION_FAILED");
    (err as any).status = 400;
    (err as any).details = validate.errors;
    throw err;
  }
  return data as T;
}
