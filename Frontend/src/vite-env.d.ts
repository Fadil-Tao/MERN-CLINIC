/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_BASE_URL_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }