import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import instagram from "../images/icon-instagram.svg"
import youtube from "../images/icon-youtube.svg"
import up from "../images/icon-up.svg"
import down from "../images/icon-down.svg"
export function Followers() {
  return (
    <>
        <section className="py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 cur">
            <article className="bg-slate-200 dark:bg-slate-900 p-5 rounded-lg shadow shadow-slate-50 cur">
                <ul className="flex items-center justify-center text-center">
                    <li><img src={facebook} alt="facebook" className="mr-2" /></li>
                    <li className="text-sm text-slate-600 font-bold">@ZASKE</li>
                </ul>

                <h2 className="text-5xl font-bold text-slate-800 text-center my-5">23,000 <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest">Seguidores</span></h2>
                <p className="text-center text-emerald-500 flex items-center justify-center text-sm font-bold">
                    <img src={up} alt="" className="mr-2 w-3"/>
                    +12 hoy
                </p>
            </article>

            <article className="bg-slate-200 p-5 rounded-lg shadow shadow-slate-50">
                <ul className="flex items-center justify-center text-center">
                    <li><img src={twitter} alt="twitter" className="mr-2" /></li>
                    <li className="text-sm text-slate-600 font-bold">@ZASKE_99</li>
                </ul>

                <h2 className="text-5xl font-bold text-slate-800 text-center my-5">3,266 <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest">Seguidores</span></h2>
                <p className="text-center text-emerald-500 flex items-center justify-center text-sm font-bold">
                    <img src={up} alt="" className="mr-2 w-3"/>
                    +12 hoy
                </p>
            </article>

            <article className="bg-slate-200 p-5 rounded-lg shadow shadow-slate-50">
                <ul className="flex items-center justify-center text-center">
                    <li><img src={instagram} alt="instagram" className="mr-2" /></li>
                    <li className="text-sm text-slate-600 font-bold">@ZASKE_99</li>
                </ul>

                <h2 className="text-5xl font-bold text-slate-800 text-center my-5">43,600 <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest">Seguidores</span></h2>
                <p className="text-center text-emerald-500 flex items-center justify-center text-sm font-bold">
                    <img src={up} alt="" className="mr-2 w-3"/>
                    +12 hoy
                </p>
            </article>

            <article className="bg-slate-200 p-5 rounded-lg shadow shadow-slate-50">
                <ul className="flex items-center justify-center text-center">
                    <li><img src={youtube} alt="youtube" className="mr-2" /></li>
                    <li className="text-sm text-slate-600 font-bold">ZASKE</li>
                </ul>

                <h2 className="text-5xl font-bold text-slate-800 text-center my-5">505,000 <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest">Seguidores</span></h2>
                <p className="text-center text-rose-500 flex items-center justify-center text-sm font-bold">
                    <img src={down} alt="" className="mr-2 w-3"/>
                    -12 hoy
                </p>
            </article>
        </section>
    </>
  );
}