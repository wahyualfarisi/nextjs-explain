import Link from 'next/link';

function BlogPage(){

    const data = [
        {
            id: 1,
            title: 'Bagaimana cara menggunakan Next JS',
            slug: 'bagaimana-menggunakan-next-js'
        },
        {
            id:2,
            title: 'Next js for production framework',
            slug: 'next-js-for-production-framework'
        }
    ];

    return (
        <div>
            <h1>Blog Page</h1>

            <ul>
            {data.map((item, _) => {
                return (
                    <li key={item.key}>
                        <Link href={`blog/${item.slug}`}>{item.title}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default BlogPage