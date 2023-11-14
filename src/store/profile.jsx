import React from "react";
import { authService } from "../services";
import { create } from 'zustand';

export const profileStore = create(set => ({
    profile: {
        username: ''
    },
    setProfile: (profile) => set(() => ({profile: profile})),
    // getProfile: async () => {
    //     try {
    //         const response = await authService.getUserProfile()
    //         set({profile: await response.data})
    //     } catch (error) {
            
    //     }
    // }
}))
