import {ThemedView} from '../ThemedView';
import {ThemedText} from '../ThemedText';
import DebtCard from './DebtCard';
import {memo} from 'react';
import Animated from 'react-native-reanimated';
import {ColorsBase } from '@/constants/Colors'
import {Debt} from '@/types/types';

const DebtsClient = ( {debtsList}:{debtsList?:Debt[]}) => {
    return(
        <Animated.FlatList
            scrollEnabled
            keyboardShouldPersistTaps = 'handled'
            data={debtsList}
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
                <DebtCard invoice_id={item.invoice_id} due_date={item.due_date} amount={item.amount} company={item.company}  client_description='' client_id='' invoice_title=''/>
            )}
        />
    )
}

export default memo(DebtsClient)