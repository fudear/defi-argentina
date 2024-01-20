import { useCallback, useEffect, useRef, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Box, Button, CircularProgress, Input, Typography } from '@mui/material';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import useSchedulingPayments from '../../hooks/useSchedulingPayments';

const SolanaWalletConnect = () => {
  const [amount, setAmount] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [txFinished, setTxFinished] = useState<boolean>(false)
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection()

  const { schedulePayment } = useSchedulingPayments()


  const handleClick = useCallback(async () => {
    if (!publicKey) return;

    setIsLoading(true)
    try {
      await schedulePayment()
      setTxFinished(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }

  }, [publicKey, sendTransaction, connection])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingTop: '32px' }}>
      {!publicKey && <Typography variant='body1'>Conectarse con la wallet para continuar </Typography>}
      <WalletMultiButton />
      {isLoading && <CircularProgress />}
      {
        !isLoading && publicKey && !txFinished
          ?
          (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant='body1'>Monto a donar de manera recurrente</Typography>
              <Input type="text" onChange={(e) => setAmount(e.target.value)} />
              <Button variant='contained' onClick={handleClick} disabled={!publicKey}>Confirmar</Button>
            </Box>
          )
          : null
      }

      {
        txFinished &&
        <Box color={'green'} sx={{ background: '#77ee22', color: 'white', borderRadius: '10px', p: 1 }}>
          Donacion recurrente realizada con éxito
        </Box>

      }
    </Box>
  )
}

export default SolanaWalletConnect;