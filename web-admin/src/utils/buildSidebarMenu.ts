export type MenuItem = {
  menuId: string;
  name: string;
  path: string;
  icon?: string;
  parentId: string | null;
  order: number;
};

export type NavSubItem = {
  name: string;
  path: string;
  icon?: string;
};

export type NavItem = {
  name: string;
  icon?: string;
  path?: string;
  order: number;
  subItems?: NavSubItem[];
};

/**
 * Converts flat menu array to nested sidebar structure
 * and sorts both main menus and submenus by 'order'
 */
export function buildSidebarMenu(menus: MenuItem[]): NavItem[] {
  // Map parentId -> children
  const childrenMap: Record<string, MenuItem[]> = {};

  menus.forEach((m) => {
    if (m.parentId) {
      if (!childrenMap[m.parentId]) childrenMap[m.parentId] = [];
      childrenMap[m.parentId].push(m);
    }
  });

  // Sort subitems by order
  Object.keys(childrenMap).forEach((key) => {
    childrenMap[key].sort((a, b) => a.order - b.order);
  });

  // Filter and sort main menus by order
  const mainMenus: NavItem[] = menus
    .filter((m) => m.parentId === null)
    .sort((a, b) => a.order - b.order)
    .map((m) => {
      const subItems = childrenMap[m.menuId]?.map((c) => ({
        name: c.name,
        path: c.path,
        icon: c.icon,
      }));

      // Only include main menu if it has a path or subItems
      if (!m.path && (!subItems || subItems.length === 0)) return null;

      return {
        name: m.name,
        path: m.path,
        icon: m.icon,
        order: m.order,
        subItems,
      };
    })
    .filter(Boolean) as NavItem[];

  return mainMenus;
}
