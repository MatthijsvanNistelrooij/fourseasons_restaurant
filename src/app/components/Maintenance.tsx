import Image from "next/image"
import logo from "/public/logo.png"

const Maintenance = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-6">
      <div className="text-center">
        <Image
          src={logo}
          alt="Four Seasons"
          width={220}
          priority
          className="mx-auto mb-8"
        />

        <h1 className="mb-4 text-4xl font-bold text-white">
          We&apos;re currently closed for maintenance
        </h1>

        <p className="align-center mx-auto max-w-md text-gray-300">
          We&apos;re making some improvements and will be back shortly. Thank
          you for your patience.
        </p>
      </div>
    </main>
  )
}

export default Maintenance
