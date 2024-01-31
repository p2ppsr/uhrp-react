import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { resolve } from 'nanoseek'
import { isValidURL } from 'uhrp-url'

const useStore = create(persist(
  (set, get) => ({
    urls: {},
    setCorrectURL: async (src, confederacyHost) => {
      // Avoid redundant updates
      if (src in get().urls) {
        return
      }

      // Attempt to resolve UHRP url if valid
      if (!isValidURL(src)) {
        set(state => ({ urls: { ...state.urls, [src]: src } }))
      } else {
        try {
          const [url] = await resolve({ confederacyHost: confederacyHost, UHRPUrl: src })
          set(state => ({ urls: { ...state.urls, [src]: url } }))
        } catch (e) {
          console.error(e)
        }
      }
    }
  }),
  {
    name: 'uhrp-react-session',
    storage: createJSONStorage(() => window.sessionStorage)
  }
))
export default useStore
