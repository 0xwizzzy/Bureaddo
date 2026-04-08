export const headerHTML = `
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
<div class="bg-blue-500 hidden md:block">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <div class="flex items-center space-x-8">
      <a href="#" class="text-white hover:text-gray-200 font-medium">Delivery</a>
      <a href="#" class="text-white hover:text-gray-200 font-medium">Our Stores</a>
    </div>
    <div class="flex items-center space-x-8">
      <a href="#" class="text-white hover:text-gray-200 flex items-center">
          <i class="fa-solid fa-magnifying-glass text-lg"></i>
          <span class="ml-2 font-medium">Search</span>
        </a>
        <a href="#" class="text-white hover:text-gray-200 flex items-center">
          <i class="fa-solid fa-cart-shopping text-lg"></i>
          <span class="ml-2 font-medium">Cart</span>
        </a>
         <a href="#" class="text-white hover:text-gray-200 flex items-center">
          <i class="fa-solid fa-user text-lg"></i>
          <span class="ml-2 font-medium">My Account</span>
        </a>
    </div>
  </div>
</div>
 
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:bg-white bg-violet-500">
    <div class="flex justify-between md:justify-center items-center h-16">
      <div class="md:hidden flex items-center">
        <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Open main menu</span>
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
      <div class="hidden md:flex md:space-x-8 items-center whitespace-nowrap flex-nowrap">
        <div class="group relative">
          <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            What's New <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i>
          </a>
          <div class="fixed left-0 right-0 top-32 bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a href="#" class="flex items-center space-x-4 p-4 border border-orange-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <img src="https://placehold.co/80x80?text=Cakes" alt="New 5 inch Cakes" class="w-16 h-16 rounded-full object-cover">
                  <span class="font-medium text-gray-800">New 5" Cakes</span>
                </a>
                <a href="#" class="flex items-center space-x-4 p-4 border border-orange-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <img src="https://placehold.co/80x80?text=Hampers" alt="Hampers" class="w-16 h-16 rounded-full object-cover">
                  <span class="font-medium text-gray-800">Hampers</span>
                </a>
                <a href="#" class="flex items-center space-x-4 p-4 border border-orange-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <img src="https://placehold.co/80x80?text=Party" alt="Party Bag Fillers" class="w-16 h-16 rounded-full object-cover">
                  <span class="font-medium text-gray-800">Party Bag Fillers</span>
                </a>
                <a href="#" class="flex items-center space-x-4 p-4 border border-orange-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <img src="https://placehold.co/80x80?text=Spring" alt="Spring Bakes" class="w-16 h-16 rounded-full object-cover">
                  <span class="font-medium text-gray-800">Spring Bakes</span>
                </a>
                <a href="#" class="flex items-center space-x-4 p-4 border border-orange-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <img src="https://placehold.co/80x80?text=Sharing" alt="Sharing Bundles" class="w-16 h-16 rounded-full object-cover">
                  <span class="font-medium text-gray-800">Sharing Bundles</span>
                </a>
                <a href="#" class="flex items-center space-x-4 p-4 border border-orange-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <img src="https://placehold.co/80x80?text=Vintage" alt="Vintage Cakes" class="w-16 h-16 rounded-full object-cover">
                  <span class="font-medium text-gray-800">Vintage Cakes</span>
                </a>
                <a href="#" class="flex items-center justify-center space-x-2 p-4 border border-orange-100 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All What's New</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Easter <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Occasions <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Cupcakes <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Cakes <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Nationwide <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Brownies & Cookies <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Pies & Cheesecakes <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Birthday Cakes <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
        <a href="#" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">Wedding Cakes <i class="fa-solid fa-chevron-down ml-1 text-[10px]"></i></a>
      </div>
      <div class="md:hidden flex items-center space-x-4">
        <a href="#" class="text-white hover:text-gray-200">
          <span class="sr-only">Search</span>
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
        </a>
        <a href="#" class="text-white hover:text-gray-200">
          <span class="sr-only">Cart</span>
          <i class="fa-solid fa-cart-shopping text-xl"></i>
        </a>
         <a href="#" class="text-white hover:text-gray-200">
          <span class="sr-only">Account</span>
          <i class="fa-solid fa-user text-xl"></i>
        </a>
      </div>
    </div>
    <div id="mobile-menu" class="fixed inset-0 bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
      <div class="bg-violet-500 flex justify-between items-center p-4">
        <h2 class="text-white text-xl font-bold italic">Menu</h2>
        <button id="close-menu-button" class="text-white">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
      <div class="flex flex-col divide-y divide-gray-200">
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>What's New</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Easter</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Occasions</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Cupcakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Cakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Brownies & Cookies</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Birthday Cakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Wedding Cakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
      </div>
    </div>
  </nav>

 <div class="bg-red-700"> 
  <div class="max-w-7xl mx-auto px-6 mx-4">
  </div>
</div>
<div class="" ></div>
</header>
`

export const footerHTML = `
<footer class="bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      <div>
        <h3 class="text-lg font-bold mb-4 italic">Bureaddi</h3>
        <p class="text-gray-400 text-sm">Crafting delicious moments since 2026. Every bite is a piece of heaven.</p>
      </div>
      <div>
        <h4 class="font-bold mb-4">Quick Links</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white">Delivery</a></li>
          <li><a href="#" class="hover:text-white">Our Stores</a></li>
          <li><a href="#" class="hover:text-white">What's New</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Support</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white">Contact Us</a></li>
          <li><a href="#" class="hover:text-white">FAQs</a></li>
          <li><a href="#" class="hover:text-white">Shipping Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Follow Us</h4>
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="fa-brands fa-facebook text-2xl"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="fa-brands fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-xs">
      <p>&copy; 2026 Bureaddi. All rights reserved.</p>
    </div>
  </div>
</footer>
`

export function setupLayout() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
    });
  }

  if (closeMenuButton && mobileMenu) {
    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  }
}
