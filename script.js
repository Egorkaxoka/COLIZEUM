    // Мобильное меню
    const navBurger = document.getElementById('navBurger');
    const navMobile = document.getElementById('navMobile');

    if (navBurger && navMobile) {
      navBurger.addEventListener('click', () => {
        navMobile.classList.toggle('nav-mobile-open');
      });

      navMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMobile.classList.remove('nav-mobile-open');
        });
      });
    }

    // Модалка приложения
    const appModal = document.getElementById('appModal');
    const modalClose = document.getElementById('modalClose');
    const appButtons = document.querySelectorAll('[data-open-app-modal]');

    appButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        appModal.classList.add('show');
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        appModal.classList.remove('show');
      });
    }

    if (appModal) {
      appModal.addEventListener('click', (e) => {
        if (e.target === appModal) {
          appModal.classList.remove('show');
        }
      });
    }

    // Общие типы зон: железо и общий формат
  const zoneTypes = {
    solo: {
      badge: "PC зона SOLO",
      specs: [
        "ПК: i5 / 32 ГБ RAM",
        "Видеокарта: 5070 TI",
        "Монитор: 380 Гц",
        "Переферия ASUS ROG",
        "Индивидуальное игровое место"
      ]
    },
    duo: {
      badge: "PC зона DUO",
      specs: [
        "2 игровых места рядом",
        "ПК: i5 / 32 ГБ RAM",
        "Видеокарта: 5070",
        "Монитор: 280 Гц",
        "Переферия ASUS ROG"
      ]
    },
    trio: {
      badge: "PC зона TRIO",
      specs: [
        "3 места в одном блоке",
        "Отлично для тренировок и стак 3/3",
        "ПК: i5 / 32 ГБ RAM",
        "Видеокарта: 5060 TI",
        "Монитор: 280 Гц",
        "Переферия ASUS ROG"
      ]
    },
    bootcamp: {
      badge: "BOOTCAMP",
      specs: [
        "Командные блоки под буткемпы",
        "Одинаковая конфигурация ПК",
        "Подходит для турниров и тренировок",
        "ПК: i5 / 32 ГБ RAM",
        "Видеокарта: 4060 TI",
        "Монитор: 280 Гц",
        "Переферия ASUS ROG"
      ]
    },
    standart: {
      badge: "Standart PC",
      specs: [
        "Базовая зона с комфортным железом",
        "Подходит для любых дисциплин",
        "Оптимальное соотношение цена / качество",
        "ПК: i5 / 16 ГБ RAM",
        "Видеокарта: 4060",
        "Монитор: 240 Гц",
        "Переферия ASUS TUF GAMING"
      ]
    },
    standartps: {
      badge: "Standart PS",
      specs: [
        "Консоли PlayStation 5",
        "Большой экран / 65 дюймов",
        "Кооператив и party-игры"
      ]
    },
    vipps: {
      badge: "VIP PS",
      specs: [
        "Отдельная VIP-комната",
        "PS5 PRO + большой ТВ / 75 дюймов",
        "Закрытая атмосфера для компании"
      ]
    }
  };

  // Конкретные зоны: на каждую — своё фото и при желании описание
  // ключи должны совпадать с data-label у кнопок (map-hotspot)
  const zones = {
    "SOLO 1": {
      photo: "img/rooms/solo-1(2).jpg"
    },
    "SOLO 2": {
      photo: "img/rooms/solo-2.jpg"
    },

    "DUO 1": {
      photo: "img/rooms/duo-1.jpg"
    },
    "DUO 2": {
      photo: "img/rooms/duo-2.jpg"
    },
    "DUO 3": {
      photo: "img/rooms/duo-3.jpg"
    },

    "TRIO 1": {
      photo: "img/rooms/trio-1.jpg"
    },
    "TRIO 2": {
      photo: "img/rooms/trio-2.jpg"
    },
    "TRIO 3": {
      photo: "img/rooms/trio-3.jpg"
    },

    "BOOTCAMP 1": {
      photo: "img/rooms/bootcamp-1.jpg"
    },
    "BOOTCAMP 2": {
      photo: "img/rooms/bootcamp-2.jpg"
    },

    "STANDART 1": {
      photo: "img/rooms/standart-1.jpg"
    },
    "STANDART 2": {
      photo: "img/rooms/standart-2.jpg"
    },

    "STANDART PS 1": {
      photo: "img/rooms/standart-ps-1.jpg"
    },
    "STANDART PS 2": {
      photo: "img/rooms/standart-ps-2.jpg"
    },

    "VIP PS": {
      photo: "img/rooms/vip-ps.jpg"
    }
  };

  const hotspots = document.querySelectorAll(".map-hotspot");
  const titleEl = document.getElementById("roomTitle");
  const badgeEl = document.getElementById("roomBadge");
  const specsEl = document.getElementById("roomSpecs");
  const photoEl = document.getElementById("roomPhoto");
  const descEl  = document.getElementById("roomDesc");

  hotspots.forEach(btn => {
    btn.addEventListener("click", () => {
      const kind  = btn.dataset.kind;
      const label = btn.dataset.label;

      const typeData = zoneTypes[kind];
      const zoneData = zones[label];

      if (!typeData) return;

      // Подсветка активной точки
      hotspots.forEach(h => h.classList.remove("active"));
      btn.classList.add("active");

      // Заголовок и бейдж
      titleEl.textContent = label;
      badgeEl.textContent = typeData.badge;

      // Список характеристик
      specsEl.innerHTML = "";
      const ul = document.createElement("ul");
      typeData.specs.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
      specsEl.appendChild(ul);

      // Описание конкретной зоны
      if (descEl) {
        descEl.textContent = zoneData && zoneData.desc ? zoneData.desc : "";
      }

      // Фото: используем фото зоны
      const photo = zoneData && zoneData.photo ? zoneData.photo : null;

      if (photo) {
        photoEl.style.opacity = "0";
        setTimeout(() => {
          photoEl.src = photo;
          photoEl.alt = label;
          photoEl.style.opacity = "1";
        }, 80);
      } else {
        photoEl.style.opacity = "0";
      }
    });
  });
  
  const snowContainer = document.createElement("div");
snowContainer.className = "snow";
document.body.appendChild(snowContainer);

for (let i = 0; i < 60; i++) {
  const snowflake = document.createElement("span");
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = 6 + Math.random() * 10 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.transform = `scale(${Math.random()})`;
  snowContainer.appendChild(snowflake);
}
