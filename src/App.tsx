import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Check, MapPin, Search } from "lucide-react";
import { Chatbot } from "./Chatbot";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Family Plans", path: "/plans" },
    { name: "Experience", path: "/experience" },
    { name: "Transparency", path: "/transparency" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col p-6 md:p-12 dot-grid relative overflow-x-hidden text-zinc-900 bg-white">
      <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-8 z-10 w-full max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-8 h-8 bg-green-600 rounded-full transform group-hover:scale-110 transition-transform shadow-sm"></div>
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-900 opacity-70 group-hover:opacity-100 transition-opacity">Gạo Vi Sinh</span>
        </Link>
        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors ${
                location.pathname === link.path ? "text-green-600" : "text-zinc-500 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-grow flex flex-col justify-center z-10 w-full max-w-[1440px] mx-auto">
        {children}
      </main>
      <footer className="mt-24 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-500 gap-4 z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex gap-8">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Manifesto</span>
        </div>
        <div>Built for Single-Viewport Display</div>
      </footer>
      <Chatbot />
    </div>
  );
}

function HomePage() {
  return (
    <div className="flex flex-col h-full justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col xl:flex-row xl:items-center gap-12 w-full">
        <div className="flex-1 w-full xl:w-auto">
          <h1 className="heading-giant m-0 flex-shrink-0 text-zinc-900">
            GẠO<br/>VI SINH
          </h1>
          <div className="mb-4 mt-8 max-w-md space-y-8">
            <p className="text-xl md:text-2xl text-zinc-600 leading-tight font-light">
              Ăn sạch bụng, nhẹ hành tinh. Gạo không hóa chất, trồng theo phương pháp vi sinh và quy trình giảm phát thải Carbon.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer border-none shadow-md">
                Mua ngay <ArrowRight size={14} />
              </button>
               <button className="px-6 py-3 border border-green-600 text-green-700 hover:bg-green-50 transition-colors rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer bg-transparent">
                Tìm hiểu quy trình
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <img src="https://images.unsplash.com/photo-1574323347407-28d5d4d3c907?w=1200&q=80" alt="Cánh đồng lúa" className="w-full h-[300px] md:h-[500px] object-cover rounded-[2rem] border border-green-600 shadow-lg relative z-10" />
          <div className="hidden md:block absolute -bottom-10 -left-10 w-48 h-48 rounded-[2rem] border-2 border-green-200 bg-white p-2 z-20 shadow-xl overflow-hidden transform -rotate-6">
             <img src="https://images.unsplash.com/photo-1588714477688-66bd327eb5bb?w=300&q=80" alt="Hạt lúa" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 border-green-200 bg-white p-2 z-0 shadow-xl overflow-hidden transform rotate-12 opacity-80 hover:opacity-100 hover:z-30 transition-all">
             <img src="https://images.unsplash.com/photo-1594957657936-7e3e0ecf76cb?w=300&q=80" alt="Kiểm định" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
      
      <div className="mt-20 md:mt-16 flex items-center gap-8 w-full">
        <div className="h-[1px] flex-grow bg-green-200"></div>
        <span className="text-[10px] font-mono text-zinc-400">RE-0482 // 2024</span>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
        <div className="glass p-8 rounded-2xl group hover:shadow-lg transition-all bg-white bg-opacity-80">
          <div className="text-[10px] uppercase tracking-widest text-green-600 mb-4 flex items-center gap-2"><Leaf size={12}/> Phương pháp</div>
          <div className="text-2xl font-bold mb-3 text-zinc-900">100% Vi Sinh</div>
          <div className="text-sm text-zinc-600 leading-relaxed">Không phân bón hóa học, không thuốc trừ sâu, thân thiện sức khỏe.</div>
        </div>
        <div className="glass p-8 rounded-2xl group hover:shadow-lg transition-all bg-white bg-opacity-80">
           <div className="text-[10px] uppercase tracking-widest text-green-600 mb-4 flex items-center gap-2"><Leaf size={12}/> Môi trường</div>
          <div className="text-2xl font-bold mb-3 text-zinc-900">Giảm Phát Thải</div>
          <div className="text-sm text-zinc-600 leading-relaxed">Quy trình ngập khô xen kẽ (AWD) giảm khí nhà kính metan.</div>
        </div>
        <div className="glass p-8 rounded-2xl group hover:shadow-lg transition-all bg-white bg-opacity-80">
          <div className="text-[10px] uppercase tracking-widest text-green-600 mb-4 flex items-center gap-2"><Shield size={12}/> Cam kết</div>
          <div className="text-2xl font-bold mb-3 text-zinc-900">Minh Bạch</div>
          <div className="text-sm text-zinc-600 leading-relaxed">Quét mã QR để truy xuất nguồn gốc mỗi gói gạo trực tiếp từ đồng.</div>
        </div>
      </section>
    </div>
  );
}

function ProductsPage() {
  const products = [
    { title: "Gạo Thơm ST25", desc: "Dẻo, thơm lừng, vinh danh ngon nhất thế giới.", tag: "Premium", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80" },
    { title: "Gạo mầm ST25", desc: "Nhiều GABA, tốt cho người tiểu đường và ăn kiêng.", tag: "Health", image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=800&q=80" },
    { title: "Gạo tròn Japonica", desc: "Hạt tròn, dẻo nhiều, chuẩn vị sushi Nhật Bản.", tag: "Specialty", image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&q=80" }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col gap-6 mb-12">
        <h1 className="text-[100px] md:text-[140px] bold-text uppercase m-0 leading-none text-zinc-900">OUR<br/>HARVEST</h1>
        <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl text-justify">
          Cultivated with care in the Tràm Chim ecosystem. Mỗi hạt gạo mang trong mình tinh túy của một nền nông nghiệp tái tạo, không hóa chất, thuận tự nhiên.
        </p>
      </div>
      
      <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-16 relative">
        <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80" alt="Cánh đồng bao la" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 md:p-12">
          <h2 className="text-white text-3xl md:text-5xl font-bold max-w-2xl text-shadow-lg">Từ cánh đồng sinh thái đến bữa cơm gia đình.</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="glass p-4 sm:p-8 rounded-2xl flex flex-col group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg bg-white">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
               <span className="text-8xl bold-text text-black">0{i+1}</span>
            </div>
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-xl mb-6 border border-green-200" />
            <div className="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-[9px] font-bold uppercase tracking-wider w-fit mb-6 text-green-700 text-center relative z-10">
              {p.tag}
            </div>
            <h3 className="text-3xl font-bold mb-4 relative z-10 text-zinc-900">{p.title}</h3>
            <p className="text-zinc-600 mb-8 flex-grow relative z-10">{p.desc}</p>
            <button className="self-start text-green-600 text-xs font-bold uppercase tracking-widest hover:text-green-800 transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none p-0">
              Chi tiết <ArrowRight size={14}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlansPage() {
  const plans = [
    { title: "Gia Đình An Tâm", w: "5kg/tháng", desc: "Dành cho gia đình 2-3 người. Giao tận nhà hàng tháng.", image: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=500&q=80" },
    { title: "Gia Đình Khỏe Mạnh", w: "10kg/tháng", desc: "Phù hợp cho gia đình 4 người. Ưu đãi 5%.", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&q=80" },
    { title: "Gia Đình Thông Thái", w: "20kg/tháng", desc: "Lựa chọn tốt nhất cho đại gia đình. Ưu đãi 10% + Quà tặng.", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80" }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
        <h1 className="text-[100px] md:text-[140px] bold-text uppercase m-0 leading-none text-zinc-900">FAMILY<br/>PLANS</h1>
        <div className="max-w-md pb-4">
           <div className="px-4 py-2 bg-green-600 text-white rounded-full text-[9px] font-bold uppercase tracking-wider inline-block mb-4">Subscribe & Save</div>
           <p className="text-xl text-zinc-600 font-light">Eat more, love the earth more. Sustainable subscriptions for your household.</p>
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div key={i} className={`glass p-6 sm:p-8 rounded-2xl flex flex-col transition-all hover:shadow-lg ${i===1 ? 'border-[2px] border-green-600 bg-green-50 shadow-md transform lg:-translate-y-4' : 'bg-white'}`}>
             <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm border border-green-100" />
             <div className={`text-[10px] uppercase tracking-widest mb-2 font-bold ${i===1 ? 'text-green-700' : 'text-green-600'}`}>{p.w}</div>
             <h3 className="text-2xl font-bold mb-4 text-zinc-900">{p.title}</h3>
             <div className="h-[1px] w-full bg-green-200 my-4"></div>
             <p className="text-zinc-600 mb-8 flex-grow text-sm leading-relaxed">{p.desc}</p>
             <button className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-none ${i===1 ? 'bg-green-600 text-white hover:bg-green-700 shadow-md' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-green-200'}`}>
               Đăng Ký
             </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperiencePage() {
  const experiences = [
    { title: "Khám Phá Đồng Ruộng Vi Sinh", desc: "Tham gia gieo cấy, gặt lúa và học cách làm nông nghiệp bền vững.", image: "https://images.unsplash.com/photo-1595804561814-13eb7a40fac4?w=500&q=80" },
    { title: "Bữa Trưa Nhờ Đồng", desc: "Thưởng thức mâm cơm quê với gạo mới và cá đồng đặc sản.", image: "https://images.unsplash.com/photo-1563814674681-3fbf11fbc9c1?w=500&q=80" },
    { title: "Tham Quan Tràm Chim", desc: "Đi xuồng ngắm sếu đầu đỏ và hệ sinh thái quý hiếm.", image: "https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&q=80" }
  ];

  return (
     <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col gap-6 mb-16">
        <h1 className="text-[100px] md:text-[140px] bold-text uppercase m-0 leading-none text-zinc-900">FIELD<br/>SESSION</h1>
        <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl">
          From table to field. Immerse yourself in the origin of your food.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="glass p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:shadow-md transition-all bg-white hover:-translate-y-0.5">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 flex-grow">
              <span className="text-5xl md:text-6xl bold-text text-zinc-200 group-hover:text-green-600 transition-colors">0{i+1}</span>
              <img src={exp.image} alt={exp.title} className="w-full md:w-32 h-40 md:h-28 object-cover rounded-xl border border-green-200 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-zinc-900">{exp.title}</h3>
                <p className="text-zinc-600 max-w-xl">{exp.desc}</p>
              </div>
            </div>
            <button className="flex-shrink-0 w-12 h-12 rounded-full border border-green-600 flex items-center justify-center group-hover:bg-green-600 text-green-600 group-hover:text-white transition-all cursor-pointer bg-transparent">
               <ArrowRight size={20}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransparencyPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col xl:flex-row gap-16 mb-12">
        <h1 className="text-[100px] md:text-[140px] bold-text uppercase m-0 leading-none text-zinc-900">CLEAR<br/>TRUTH</h1>
        <div className="max-w-xl pb-4 xl:pt-8 text-zinc-900">
           <p className="text-2xl text-zinc-600 font-light mb-8">From Soil to Soul. We hide nothing.</p>
           <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 border border-green-600 rounded-full text-[9px] font-bold uppercase tracking-wider flex items-center gap-2 text-zinc-900 bg-white shadow-sm"><Check size={12} className="text-green-600"/> Tồn Dư Thuốc BVTV 0%</div>
              <div className="px-4 py-2 border border-green-600 rounded-full text-[9px] font-bold uppercase tracking-wider flex items-center gap-2 text-zinc-900 bg-white shadow-sm"><Check size={12} className="text-green-600"/> Đạt chuẩn VietGAP</div>
           </div>
        </div>
      </div>
      
      <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 shadow-lg border border-green-100">
        <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80" alt="Cánh đồng màu xanh" className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass bg-white p-10 rounded-2xl shadow-sm">
           <div className="text-[10px] uppercase tracking-widest text-green-700 mb-8 font-bold">The Microbial Difference</div>
           <div className="space-y-8">
             <div className="flex gap-6 items-center">
               <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=200&q=80" alt="Soil" className="w-24 h-24 object-cover rounded-2xl border border-green-200 shadow-sm" />
               <div>
                 <h4 className="text-xl font-bold mb-2 text-zinc-900">Phục hồi đất</h4>
                 <p className="text-zinc-600 text-sm">Sử dụng phân hữu cơ và vi sinh vật bản địa để tái tạo màu mỡ, tạo môi trường sống cho vi sinh vật có lợi.</p>
               </div>
             </div>
             <div className="flex gap-6 items-center">
               <img src="https://images.unsplash.com/photo-1541818225576-9d62d2ee649d?w=200&q=80" alt="Water" className="w-24 h-24 object-cover rounded-2xl border border-green-200 shadow-sm" />
               <div>
                 <h4 className="text-xl font-bold mb-2 text-zinc-900">Tiết kiệm nước</h4>
                 <p className="text-zinc-600 text-sm">Công nghệ tưới ướt khô xen kẽ giảm 30% lượng nước tiêu thụ so với phương pháp truyền thống.</p>
               </div>
             </div>
             <div className="flex gap-6 items-center">
               <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&q=80" alt="Wind" className="w-24 h-24 object-cover rounded-2xl border border-green-200 shadow-sm" />
               <div>
                 <h4 className="text-xl font-bold mb-2 text-zinc-900">Giảm Carbon</h4>
                 <p className="text-zinc-600 text-sm">Cắt giảm hơn 40% phát thải khí mê-tan ra môi trường, chống lại biến đổi khí hậu.</p>
               </div>
             </div>
           </div>
        </div>

        <div className="glass bg-white p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
           <img src="https://images.unsplash.com/photo-1628102491629-77858c630fb1?w=800&q=80" alt="Blockchain Tracking" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
           <div className="relative z-10">
             <Search size={48} className="mb-6 text-green-600 mx-auto" strokeWidth={1.5} />
             <h3 className="text-3xl font-bold mb-4 text-zinc-900">Scan. Trace. Trust.</h3>
             <p className="text-zinc-600 mb-8 max-w-sm mx-auto">Mỗi bao bì đều có mã QR. Quét để xem vị trí đồng lúa, ngày thu hoạch, và bảng kiểm định chất lượng do Blockchain xác thực.</p>
             <button className="px-6 py-4 bg-zinc-900 text-white hover:bg-green-600 transition-colors rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer border-none shadow-md hover:shadow-lg">
                Khám phá Blockchain Traceability
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
     <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 text-zinc-900 mb-32">
       <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-[80px] md:text-[120px] bold-text uppercase m-0 leading-none mb-8">THE<br/>PROMISE</h1>
        <p className="text-xl md:text-2xl text-zinc-600 font-light">
          The Hands Behind the Harvest. 
        </p>
      </div>

      <div className="glass bg-white p-2 md:p-4 rounded-3xl mb-12 shadow-sm">
        <img src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1600&q=80" alt="Nông dân" className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div className="glass bg-white p-10 rounded-2xl shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-green-700 font-mono font-bold text-xl">?</span>
          </div>
          <h3 className="text-3xl font-bold mb-6 text-zinc-900">Why Microbial?</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Trải qua nhiều thế hệ làm nông truyền thống, chúng tôi nhận ra sự cạn kiệt của đất và nguy cơ sức khỏe từ hóa chất. Đi dọc cánh đồng, không còn thấy ếch nhái, không còn cá tôm.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Gạo Vi Sinh ra đời như một lời xin lỗi và chuộc lỗi với thiên nhiên. Hồi sinh đất đai, bảo vệ người nông dân, và mang hạt gạo nguyên bản nhất lên bàn ăn gia đình bạn.
          </p>
        </div>

        <div className="glass bg-white p-10 rounded-2xl shadow-sm">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6">
            <MapPin size={24} className="text-white"/>
          </div>
          <h3 className="text-3xl font-bold mb-6 text-zinc-900">Our Roots</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Hợp tác xã lúa nước Đồng Tháp Mười, kế bên Vườn quốc gia Tràm Chim. Một hệ sinh thái đang được chữa lành từng ngày.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-green-200 bg-[url('https://images.unsplash.com/photo-1549886737-14fae8fa68af?w=150')] bg-cover bg-center shadow-sm"></div>
            <div>
              <div className="font-bold text-zinc-900">Đội ngũ Gạo Vi Sinh</div>
              <div className="text-xs text-green-600 uppercase tracking-widest mt-1">Founders & Farmers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
