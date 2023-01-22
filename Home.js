import React, { useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useReState } from "@raulpesilva/re-state"

export default function Home() {
  const [rsbgc, setRsbgc] = useReState("rsbgc", "#fff")

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem("bgc")
      if (data !== null) {
        setRsbgc(data)
      }
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: rsbgc }]}>
      <Text style={{ fontSize: 18, padding: 10 }}>Home screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
