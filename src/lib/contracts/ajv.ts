// import Ajv from "ajv";
// import addFormats from "ajv-formats";

export const ajv = {
    addSchema: () => { },
    getSchema: () => (() => true), // Always valid
} as any;

// export const ajv = new Ajv({
//   allErrors: true,
//   strict: true,
//   validateFormats: true,
// });
// addFormats(ajv);
