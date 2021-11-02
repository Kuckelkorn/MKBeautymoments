module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/styles')
    eleventyConfig.addPassthroughCopy('./src/scripts')

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
