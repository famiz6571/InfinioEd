import { NavItem } from "./buildSidebarMenu";

/**
 * Recursively collects all paths from NavItem array
 */
export function getAllPaths(navItems: NavItem[]): string[] {
  const paths: string[] = [];

  navItems.forEach((item) => {
    if (item.path) paths.push(item.path);
    if (item.subItems) {
      item.subItems.forEach((sub) => {
        if (sub.path) paths.push(sub.path);
      });
    }
  });

  return paths;
}
