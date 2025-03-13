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
        due_date: '01/01/2025',
        amount: '75.900',
        invoice_id: "INV-20240220-MOV001"

    },
    {
        type: 'Agua',
        empresa: 'EDENOR',
        cliente_id: '88698235',
        status: 'Pendiente',
        due_date: '01/01/2025',
        amount: '75.900',
        invoice_id: "INV-20240310-PER002"

    },
    {
        type: 'Gas',
        empresa: 'MetroGas',
        cliente_id: '88698235',
        status: 'Pagado',
        due_date: '01/01/2025',
        amount: '75.900',
        invoice_id: "INV-20240405-CLA003"

    },
    {
        type: 'Internet',
        empresa: 'Movistar',
        cliente_id: '88698235',
        status: 'Pagado',
        due_date: '01/01/2025',
        amount: '75.900',
        invoice_id: "INV-20240228-MET004"

    },
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
					{/* <Icon
						source={'check-decagram-outline'}
						size={40}
						color={'#75C975'}
					/> */}
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