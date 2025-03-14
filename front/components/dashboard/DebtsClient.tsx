import {ThemedView} from '../ThemedView';
import {ThemedText} from '../ThemedText';
import DebtCard from './DebtCard';
import {memo} from 'react';
import Animated from 'react-native-reanimated';
import {ColorsBase } from '@/constants/Colors'

const debtsClient = [
    {
        type: 'Electricidad',
        empresa: 'EDESUR',
        cliente_id: '88698235',
        status: 'Atrasado',
        due_date: '15/02/2025',
        amount: '45.200',
        invoice_id: "INV-20250215-ED001"
    },
    {
        type: 'Agua',
        empresa: 'AySA',
        cliente_id: '88698235',
        status: 'Pendiente',
        due_date: '10/03/2025',
        amount: '19.800',
        invoice_id: "INV-20250310-AY002"
    },
    {
        type: 'Gas',
        empresa: 'MetroGas',
        cliente_id: '88698235',
        status: 'Pagado',
        due_date: '05/04/2025',
        amount: '31.600',
        invoice_id: "INV-20250405-MG003"
    },
    {
        type: 'Internet',
        empresa: 'Movistar',
        cliente_id: '88698235',
        status: 'Pendiente',
        due_date: '28/02/2025',
        amount: '16.500',
        invoice_id: "INV-20250228-MV004"
    }
]
const DebtsClient = ( {debtsList}:{debtsList?:any[]}) => {
    return(
        <Animated.FlatList
            scrollEnabled
            keyboardShouldPersistTaps = 'handled'
            data={debtsList?.length === 0 ? debtsClient : debtsList}
            ListEmptyComponent={() => (
                <ThemedView
					style={{
						backgroundColor: 'transparent',
						alignItems: 'center',
						gap: 10,
					}}
				>
					<ThemedText
						type='title'
						style={{ color: ColorsBase.cyan400 }}
					>
						¡Oops, no hay facturas a pagar!
					</ThemedText>
					<ThemedText
						type='default'
						style={{ color: ColorsBase.cyan400 }}
					>
						Estas al día con los pagos.
					</ThemedText>
				</ThemedView>
            )}
            keyExtractor={(item) => item.invoice_id}
            renderItem={({ item }) => (
                <DebtCard invoice_id={item.invoice_id} empresa={item.empresa} amount={item.amount} due_date={item.due_date}/>
            )}
        />
    )
}

export default memo(DebtsClient)