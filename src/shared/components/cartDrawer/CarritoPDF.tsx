import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { CartItem } from '../../store/useCartStore'

const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    title: { fontSize: 20, marginBottom: 16 }
})

const CarritoPDF = ({ carrito }: { carrito: CartItem[] }) => {
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Este es mi primer PDF</Text>

                {
                    carrito.map((i) => (
                        <View key={i.id}>
                            <Text>{i.title} - {i.quantity}</Text>
                            <Text>Precio de unidad: {i.price}</Text>
                            <Text>Precio total: {(i.price * i.quantity).toFixed(2)}</Text>
                        </View>
                    ))
                }
            </Page>
        </Document>
    )
}

export default CarritoPDF