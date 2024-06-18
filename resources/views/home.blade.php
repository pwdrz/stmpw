<div class="min-h-screen bg-center bg-no-repeat bg-cover bg-homeMobile lg:bg-homeDesktop">
    @include('partials.navigation._site_header_default')
    <div class="p-6">
        <div class="flex flex-col w-full text-center gap-y-6">
            <p class="text-[16px] uppercase text-lightBlue headings headings--xs tracking-[2.5px]">so, you want to travel
                to
            </p>
            <h1 class="text-[80px] text-white uppercase headings headings--xl">space</h1>
            <p class="text-lightBlue text-[15px] leading-[1.8]">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
                experience!
            </p>
        </div>
        <div class="flex items-center justify-center h-[382px]">
            @include('partials.elements._button')
        </div>
    </div>
</div>

{{-- shadow-[0_0_128px_rgba(0,0,0,1)] shadow-white --}}
