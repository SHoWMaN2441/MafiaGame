export const avatars = [
  { id: "a1", src: "/avatars/a1.svg" },
  { id: "a2", src: "/avatars/a2.svg" },
  { id: "a3", src: "/avatars/a3.svg" },
  { id: "a4", src: "/avatars/a4.svg" },
  { id: "a5", src: "/avatars/a5.svg" },
  { id: "a6", src: "/avatars/a6.svg" },
] as const;

export function avatarSrc(id?: string) {
  const f = avatars.find((a) => a.id === id);
  return f?.src || "/avatars/a1.svg";
}
