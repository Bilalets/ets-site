"use client";
declare module "aos" {
  interface AosOptions {
    duration?: number;
    // Add other options as needed
  }

  export default class AOS {
    static init(options?: AosOptions): void;
    // Add other AOS methods as needed
  }
}
