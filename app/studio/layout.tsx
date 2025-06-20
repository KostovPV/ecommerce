import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Generated by Plan B Web services",
};


const RootLayout = ({children}:{children: React.ReactNode}) => {
    return (
    <html>
        <body lang="en">
            {children}
        </body>
    </html>
    )
}
export default RootLayout;