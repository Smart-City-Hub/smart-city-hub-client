import React from "react";
import { create } from 'zustand';

export const profileStore = create(set => ({
    profile: {
        nama: 'jkk'
    },
    setProfile: (profile) => set(() => ({profile: profile}))
}))
