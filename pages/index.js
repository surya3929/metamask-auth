import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
  const { connectWallet, address, error } = useWeb3()
  error ? console.log(error) : null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 py-2">
      {address ? (
        <p className="cursor-pointer rounded-full bg-gray-200 px-2 py-1 font-mono font-medium duration-100 hover:bg-gray-300">
          {address}
        </p>
      ) : (
        <button
          className="cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-xl font-semibold text-white duration-100 hover:bg-purple-500"
          onClick={() => connectWallet('injected')}
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}
