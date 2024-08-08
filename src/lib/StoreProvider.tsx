'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store, AppStore } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

const persistor = persistStore(store);

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store
  }

  return (
    <PersistGate persistor={persistor} loading={<>cargando</>}>
      <Provider store={storeRef.current} >{children}</Provider>
    </PersistGate>
  )
}