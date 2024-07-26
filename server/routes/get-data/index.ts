const post = {
    title: '1er article',
    content: 'Content'
};

export default eventHandler((event) => {
    return `${post.title} - ${post.content}`
})