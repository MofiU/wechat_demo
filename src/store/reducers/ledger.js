import { handleActions } from 'redux-actions'
import { LOAD_LEDGER } from '../types/ledger'

export default handleActions({
  [LOAD_LEDGER] (state, action) {
    return {
      balance:  action.payload.ledgerLineItems[0].balance,
      label: action.payload.ledgerLineItems[0].reward.rewardType.label,
      level: action.payload.ledgerTier.tier.name
    }
  }
}, {
  balance: '--',
  level: '--',
  label: ''
})
