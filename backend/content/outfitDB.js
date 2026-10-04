const OUTFIT_DB = [
  {
    id: "outfit_001",
    name: "Korean Office Chic",
    description: "Phong cách công sở Hàn Quốc thanh lịch, nhẹ nhàng nhưng không kém phần chuyên nghiệp dành cho phái nữ.",
    tags: ["office", "korean", "elegant", "asian"],
    imageUrl: "https://images2.thanhnien.vn/528068263637045248/2024/2/15/thoi-trang-cong-so8-1707978494595580799841.jpg",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo blouse lụa hoặc sơ mi voan cổ nơ điệu đà." },
        { title: "Bottom", desc: "Chân váy chữ A dáng dài hoặc quần âu cạp cao." },
        { title: "Shoes", desc: "Giày búp bê mũi nhọn hoặc giày cao gót gót vuông 3-5cm." }
      ],
      products: [
        { name: "Áo blouse lụa", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20blouse%20n%E1%BB%AF%20c%C3%B4ng%20s%E1%BB%9F" },
        { name: "Chân váy chữ A", purchaseLink: "https://shopee.vn/search?keyword=ch%C3%A2n%20v%C3%A1y%20ch%E1%BB%AF%20A%20d%C3%A1ng%20d%C3%A0i" },
        { name: "Giày mũi nhọn", purchaseLink: "https://shopee.vn/search?keyword=gi%C3%A0y%20b%C3%BAp%20b%C3%AA%20m%C5%A9i%20nh%E1%BB%8Dn" }
      ]
    }
  },
  {
    id: "outfit_002",
    name: "Douyin Streetwear (Tỉ tỉ Trung Quốc)",
    description: "Phong cách đường phố cực ngầu, tôn dáng chuẩn 'tỉ tỉ Douyin' xứ Trung.",
    tags: ["streetwear", "douyin", "cool", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo croptop ôm sát hoặc áo ống khoe eo thon." },
        { title: "Bottom", desc: "Quần ống rộng cạp trễ (parachute pants) hoặc quần túi hộp." },
        { title: "Outer", desc: "Khoác hờ áo sơ mi form rộng hoặc áo khoác croptop bên ngoài." },
        { title: "Shoes", desc: "Giày thể thao đế bánh mì (chunky sneakers) giúp ăn gian chiều cao." }
      ],
      products: [
        { name: "Áo croptop ôm", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20croptop%20%C3%B4m" },
        { name: "Quần parachute", purchaseLink: "https://shopee.vn/search?keyword=qu%E1%BA%A7n%20parachute%20n%E1%BB%AF" },
        { name: "Giày Chunky", purchaseLink: "https://shopee.vn/search?keyword=gi%C3%A0y%20chunky%20n%E1%BB%AF" }
      ]
    }
  },
  {
    id: "outfit_003",
    name: "Japanese Soft Girl (Kawaii)",
    description: "Đáng yêu, ngọt ngào và nữ tính mang đậm hơi hướng thời trang Nhật Bản (Mori girl / Kawaii).",
    tags: ["kawaii", "japanese", "cute", "soft", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4ebee04?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo tay bồng cổ vuông hoặc áo sơ mi thủy thủ cài nơ." },
        { title: "Outer", desc: "Cardigan len mỏng màu pastel nữ tính." },
        { title: "Bottom", desc: "Chân váy xòe xếp ly hoặc váy voan nhiều lớp." },
        { title: "Shoes", desc: "Giày búp bê Mary Jane mang cùng tất cổ cao bèo nhún." }
      ],
      products: [
        { name: "Áo tay bồng", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20tay%20b%E1%BB%93ng%20ti%E1%BB%83u%20th%C6%B0" },
        { name: "Cardigan len mỏng", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20cardigan%20m%E1%BB%8Fng%20n%E1%BB%AF" },
        { name: "Giày Mary Jane", purchaseLink: "https://shopee.vn/search?keyword=gi%C3%A0y%20mary%20jane%20n%E1%BB%AF" }
      ]
    }
  },
  {
    id: "outfit_004",
    name: "Hong Kong Vintage 90s",
    description: "Cổ điển, quyến rũ và mặn mà theo phong cách điện ảnh Hồng Kông thập niên 90.",
    tags: ["vintage", "retro", "hongkong", "90s", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo sơ mi lụa họa tiết vintage hoặc áo hai dây màu đỏ đô/đen." },
        { title: "Bottom", desc: "Quần jeans cạp cao ống loe (flare jeans)." },
        { title: "Accessories", desc: "Thắt lưng da bản to, son môi đỏ đậm và khuyên tai tròn." },
        { title: "Shoes", desc: "Giày boot da lộn mũi vuông cổ ngắn." }
      ],
      products: [
        { name: "Áo hai dây đỏ đô", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20hai%20d%C3%A2y%20l%E1%BB%A5a%20%C4%91%E1%BB%8F" },
        { name: "Quần ống loe", purchaseLink: "https://shopee.vn/search?keyword=qu%E1%BA%A7n%20jeans%20%E1%BB%91ng%20loe%20l%C6%B0ng%20cao" },
        { name: "Boot mũi vuông", purchaseLink: "https://shopee.vn/search?keyword=gi%C3%A0y%20boot%20n%E1%BB%AF%20m%C5%A9i%20vu%C3%B4ng" }
      ]
    }
  },
  {
    id: "outfit_005",
    name: "Korean Minimalist",
    description: "Tối giản, thoải mái nhưng vô cùng sang trọng, tinh tế chuẩn phong cách Hàn Quốc.",
    tags: ["minimalist", "korean", "casual", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1434389678232-04ce6ca45281?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo thun trơn basic hoặc áo len mỏng ôm sát." },
        { title: "Outer", desc: "Áo khoác blazer form rộng (oversized) tone màu beige/nâu." },
        { title: "Bottom", desc: "Quần tây ống suông hoặc quần jeans xanh nhạt dáng đứng." },
        { title: "Shoes", desc: "Giày loafer hoặc sneaker trắng basic." }
      ],
      products: [
        { name: "Blazer dáng rộng", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20blazer%20n%E1%BB%AF%20form%20r%E1%BB%99ng" },
        { name: "Quần âu suông", purchaseLink: "https://shopee.vn/search?keyword=qu%E1%BA%A7n%20t%C3%A2y%20n%E1%BB%AF%20%E1%BB%91ng%20su%C3%B4ng" },
        { name: "Giày Loafer", purchaseLink: "https://shopee.vn/search?keyword=gi%C3%A0y%20loafer%20n%E1%BB%AF" }
      ]
    }
  },
  {
    id: "outfit_006",
    name: "Asian Campus / Preppy",
    description: "Năng động, tươi trẻ mang đậm dấu ấn học đường nữ sinh châu Á.",
    tags: ["campus", "preppy", "youth", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo sơ mi trắng tay ngắn phối cùng áo gile len mỏng bên ngoài." },
        { title: "Bottom", desc: "Chân váy xếp ly dáng ngắn (chân váy tennis)." },
        { title: "Accessories", desc: "Túi xách tote canvas hoặc balo mini." },
        { title: "Shoes", desc: "Giày Oxford nữ phối với tất trắng viền cổ." }
      ],
      products: [
        { name: "Áo gile len", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20gile%20len%20n%E1%BB%AF" },
        { name: "Chân váy tennis", purchaseLink: "https://shopee.vn/search?keyword=ch%C3%A2n%20v%C3%A1y%20tennis" },
        { name: "Giày Oxford", purchaseLink: "https://shopee.vn/search?keyword=gi%C3%A0y%20oxford%20n%E1%BB%AF" }
      ]
    }
  },
  {
    id: "outfit_007",
    name: "Kpop Idol Y2K",
    description: "Phá cách, táo bạo và trendy lấy cảm hứng từ thời trang trình diễn của các nhóm nhạc nữ Kpop.",
    tags: ["kpop", "y2k", "trendy", "idol", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo baby tee ngắn in họa tiết sặc sỡ hoặc corset top đính đá." },
        { title: "Bottom", desc: "Chân váy denim siêu ngắn (mini skirt) xếp ly." },
        { title: "Accessories", desc: "Thắt lưng kim loại đôi, kẹp tóc cánh bướm và tất ống chân (leg warmers)." },
        { title: "Shoes", desc: "Giày boot cao cổ hoặc giày platform siêu cao." }
      ],
      products: [
        { name: "Áo baby tee Y2K", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20baby%20tee%20y2k" },
        { name: "Chân váy jean mini", purchaseLink: "https://shopee.vn/search?keyword=ch%C3%A2n%20v%C3%A1y%20jean%20mini" },
        { name: "Tất ống chân", purchaseLink: "https://shopee.vn/search?keyword=t%E1%BA%A5t%20%E1%BB%91ng%20ch%C3%A2n%20y2k" }
      ]
    }
  },
  {
    id: "outfit_008",
    name: "Vietnamese Modern Áo Dài / Yếm",
    description: "Vẻ đẹp đằm thắm, truyền thống nhưng được cách tân hiện đại, phóng khoáng của phụ nữ Việt.",
    tags: ["vietnam", "traditional", "modern", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1515347619152-16e45139031a?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Top", desc: "Áo yếm lụa tơ tằm cách tân hoặc áo dài dáng suông tay lỡ." },
        { title: "Bottom", desc: "Quần lụa ống rộng thướt tha mềm mại." },
        { title: "Accessories", desc: "Túi mây tre đan hoặc khuyên tai ngọc trai nhỏ." },
        { title: "Shoes", desc: "Guốc mộc cách tân hoặc sandal quai mảnh (mule)." }
      ],
      products: [
        { name: "Áo yếm lụa", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20y%E1%BA%BFm%20l%E1%BB%A5a%20c%C3%A1ch%20t%C3%A2n" },
        { name: "Quần lụa ống rộng", purchaseLink: "https://shopee.vn/search?keyword=qu%E1%BA%A7n%20l%E1%BB%A5a%20%E1%BB%91ng%20r%E1%BB%99ng%20n%E1%BB%AF" },
        { name: "Guốc cao gót", purchaseLink: "https://shopee.vn/search?keyword=gu%E1%BB%91c%20n%E1%BB%AF" }
      ]
    }
  },
  {
    id: "outfit_009",
    name: "Asian Heiress (Chaebol / Tiểu thư)",
    description: "Phong cách sang chảnh, kiêu kỳ của các thiên kim tiểu thư (Chaebol) Hàn - Trung.",
    tags: ["heiress", "elegant", "luxurious", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1566206091558-f62683393963?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Outfit", desc: "Set váy áo dạ tweed tone màu trắng, đen hoặc pastel." },
        { title: "Outer", desc: "Khoác hờ áo dạ cape mỏng ngang vai." },
        { title: "Accessories", desc: "Nơ cài tóc bản to bằng nhung đen và chuỗi vòng ngọc trai." },
        { title: "Shoes", desc: "Giày cao gót bít mũi đính đá hoặc mũi nhọn slingback." }
      ],
      products: [
        { name: "Set dạ Tweed", purchaseLink: "https://shopee.vn/search?keyword=set%20d%E1%BA%A1%20tweed%20n%E1%BB%AF" },
        { name: "Nơ cài tóc nhung", purchaseLink: "https://shopee.vn/search?keyword=k%E1%BA%B9p%20t%C3%B3c%20n%C6%A1%20nhung" },
        { name: "Vòng ngọc trai", purchaseLink: "https://shopee.vn/search?keyword=v%C3%B2ng%20c%E1%BB%95%20ng%E1%BB%8Dc%20trai" }
      ]
    }
  },
  {
    id: "outfit_010",
    name: "Feminine Floral / Nàng Thơ",
    description: "Ngọt ngào, mong manh như sương sớm, rất được yêu thích tại các quán cafe châu Á.",
    tags: ["floral", "feminine", "muse", "asian"],
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    fallbackImage: "",
    tutorial: {
      steps: [
        { title: "Dress", desc: "Váy lụa hoặc voan hai dây dáng xòe dài in họa tiết hoa nhí." },
        { title: "Outer", desc: "Áo sơ mi linen khoác nhẹ bên ngoài tránh nắng." },
        { title: "Accessories", desc: "Mũ cói điệu đà và giỏ xách lưới." },
        { title: "Shoes", desc: "Giày đế bệt (flat shoes) hoặc sandal thắt dây." }
      ],
      products: [
        { name: "Váy lụa hoa nhí", purchaseLink: "https://shopee.vn/search?keyword=v%C3%A1y%20hoa%20nh%C3%AD%20d%C3%A1ng%20d%C3%A0i" },
        { name: "Áo khoác linen", purchaseLink: "https://shopee.vn/search?keyword=%C3%A1o%20s%C6%A1%20mi%20linen%20n%E1%BB%AF" },
        { name: "Giày bệt", purchaseLink: "https://shopee.vn/search?keyword=gi%C3%A0y%20b%E1%BA%B9t%20n%E1%BB%AF" }
      ]
    }
  }
];

module.exports = OUTFIT_DB;
