import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import StoreProvider from "@/lib/StoreProvider";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <StoreProvider>
            <Navbar type="user" />
                {children}
            <Footer />
        </StoreProvider>
        </>)
}