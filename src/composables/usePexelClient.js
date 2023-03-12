import { createClient } from "pexels"

const API_KEY = import.meta.env.VITE_API_KEY

export const usePexelClient = () => createClient(API_KEY)