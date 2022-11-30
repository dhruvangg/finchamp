const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
    // roots: ['<rootDir>/'],
    modulePaths: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    moduleDirectories: ['node_modules', '<rootDir>', 'components'],
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)