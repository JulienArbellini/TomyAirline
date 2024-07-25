import Image from 'next/image'

export default function Home() {
  return (
    <div className=" w-screen h-screen bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/5f72/752a/1a4dfac61230f468d947ab702b97e754?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iquPnc7YYR9lL9cHa3fDw5GrE73X3Jei6d~wNChWEiaMFyjQhPtZTbEWOgNskNxTz7mF2DMgQTRW-Cuzc~i6hkYo-PsvDJY9G34fXoXAxc5erAKhtQWq1Z4cnrerWy2G0kqVKKcch81O4jiV9KGte7q1bOvnVyfqNWFr-ORx3e0Zp9ekwZ4RTzCczfyzExpLgsL7NhR-T4m3OkUVbEPYnmdb3rb3KvHuVb8lGz8Ly0SZduK1rLi8VU8rZ69t8xihncnmtNNFnjMhP-PYaJH~8TiSix0rg6u2V0EWQRT2uxTvL3hEYPPZUS3sT6IMO7bDYg47-6Xy8yJJvYOpYX80-w__')]">
        <div className="flex flex-col justify-center items-center h-full w-full p-20">
          <a href="/about">
            <Image 
            src="https://s3-alpha-sig.figma.com/img/1d0f/5aab/9dcfbaf7b57f0731143353560885cb6c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=migYxfp25pqq4T-H-o6IhPaR3k-SuSa-WrgPogIQ91H0fiKMsJSC9GZs~p0ATT0kaFa9vG2EhKYu8X-huAN-iG3uRpnh~UtSOqLnkm4C9ZDKtgEUddEBaTSr3OpbIB6QBlGLZFxZEYQUOt2iBvtw7xQ8CHQI6ulfynbJlUT9ZE2tLd1VRCarGzUJt90qKOjCzdnMWmWkcaYiOn9-eQ6PCOHgPmA-43NfeMlf19uhlmC5-0Lc55u6gttVVdMjS4r70pppPztCPNQct-rJgzzGTNHN3PdKDX1dC754F0TuS~5SVNYVjKc7NZJwGgw9nVGTnrU1CqW9Mg9RewBB8HH1tg__"
            alt="Button Image"
            width={610}
            height={24}
            className="mr-2"
          />
          </a>
          <a 
          href="/about" 
          className="absolute bottom-10 right-10 bg-black text-white p-2 rounded">
          Skip Intro
        </a>
        </div>
    </div>
  )
}
