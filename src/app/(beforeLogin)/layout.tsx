type BeforeLoginLayoutProps = {
    children: React.ReactNode;
    modal: React.ReactNode;
};

function BeforeLoginLayout({ children, modal }: BeforeLoginLayoutProps) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}

export default BeforeLoginLayout;
