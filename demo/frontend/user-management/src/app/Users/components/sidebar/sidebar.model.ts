export type SidebarAction =
  | 'create-user'
  | 'users-list'
  | 'filters-toggle';

export interface SidebarItem {
  label: string;
  icon: string;
  action: SidebarAction;
}

