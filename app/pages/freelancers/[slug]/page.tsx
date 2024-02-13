interface Params {
    slug: string;
  }
  
  export default function Page({ params }: { params: Params }) {
    return (
      <div className="min-h-[100vh] pt-[15vh]">
        <h1>{params.slug}</h1>
      </div>
    )
  }

  //belki isimize yarar kalsin kosede