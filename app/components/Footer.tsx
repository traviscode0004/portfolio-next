export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Travis Code. All rights reserved.
      </p>
    </footer>
  )
}
