import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CalendarUser } from "~/lib/_types";
import { fakeUsers } from "~/lib/data";

type UsersStore = {
  users: Array<CalendarUser>;
  selectedUsers: Array<number>;
  selectUser: (userId: number) => void;
  selectAll: () => void;
};

export const useUsersStore = create<UsersStore>()(
  persist(
    (set, get) => ({
      users: fakeUsers,
      selectedUsers: [],
      selectUser: (userId) => {
        const selectedUsers = get().selectedUsers;
        const isSelected = selectedUsers.includes(userId);

        if (isSelected) {
          set({
            selectedUsers: selectedUsers.filter((user) => user !== userId),
          });

          return;
        }

        set({ selectedUsers: [...selectedUsers, userId] });
      },
      selectAll: () => {
        const users = get().users;
        const selectedUsers = get().selectedUsers;

        if (users.length === selectedUsers.length) {
          set({ selectedUsers: [] });
          return;
        }

        set({ selectedUsers: users.map((user) => user.id) });
      },
    }),
    {
      name: "users",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
