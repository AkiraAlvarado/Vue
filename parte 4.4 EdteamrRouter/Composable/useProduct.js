import { ref } from "vue"
const useProduct = () => {
  const name = ref("")
  const price = ref(0)
  const isAvailable = ref(true)

  const submit = () => {
    console.log({ name: name.value, price: price.value, isAvailable: isAvailable.value })
  }
  return {
    name,
    price,
    isAvailable,
    submit
  }
}

export default useProduct