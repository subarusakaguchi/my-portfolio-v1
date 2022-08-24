const YEAR = 2022

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Subaru Sakaguchi
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
