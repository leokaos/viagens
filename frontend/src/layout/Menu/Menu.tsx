import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"
import useFetchItemMenu from "../../hooks/useFetchItemMenu";
import { Link, useLocation } from "react-router-dom";
import { useContextUser } from "../../context/UserContext";

const Menu = () => {

    const { itens, loading, error } = useFetchItemMenu();
    const location = useLocation();
    const user = useContextUser();

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    const cssDefault = 'p-button-text w-full justify-content-start'
    const cssCurrentItem = `${cssDefault} bg-[#d7e2ff] text-[#001945] rounded-xl font-bold'`
    const cssOtherItems = `${cssDefault} text-[#44474e]`

    return (
        <>

            <div className="p-6">
                <h1 className="text-2xl font-bold text-[#2563eb]">Viagens do Léo</h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {itens.map(item => {
                    return (
                        <Link to={item.codigo_acao} key={item.id}>
                            <Button
                                key={item.id}
                                label={item.nome}
                                icon={item.icone}
                                className={location.pathname == item.codigo_acao ? cssCurrentItem : cssOtherItems}
                            />
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-[#cbdbf5] mt-auto">
                <div className="flex items-center gap-3 px-2 py-3">
                    {
                        user && <Avatar image={user.avatar} shape="circle" size="large" />
                    }
                    {
                        user &&
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">{user.nome}</span>
                            <span className="text-[10px] text-[#44474e] font-medium">{user.email}</span>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default Menu;