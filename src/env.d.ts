/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly PUBLIC_FORMSUBMIT_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
