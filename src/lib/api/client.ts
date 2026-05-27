/**
 * API client scaffold — replace BASE_URL with your backend URL.
 * All methods return typed responses for easy integration.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  services: {
    list: () => request<unknown[]>("/services"),
    get: (slug: string) => request<unknown>(`/services/${slug}`),
  },
  bookings: {
    create: (data: unknown) =>
      request<unknown>("/bookings", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    list: () => request<unknown[]>("/bookings"),
  },
  workers: {
    list: () => request<unknown[]>("/workers"),
  },
  auth: {
    login: (credentials: unknown) =>
      request<unknown>("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      }),
    signup: (data: unknown) =>
      request<unknown>("/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },
};
