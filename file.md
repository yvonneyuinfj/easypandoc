### Create Project

1. Create a new repository named `pandocjs` on GitHub. 

   ![image-20240127000927747](https://cdn.jsdelivr.net/gh/krystalyu88/picture/image-20240127000927747.png)

2. 将创建的项目 clone 到本地。

![image-20240127001734438](https://cdn.jsdelivr.net/gh/krystalyu88/picture/image-20240127001734438.png)

3. Open the project with VSCode.exe.

4. 打开终端，执行 `yarn init` 命令初始化工程。

   ![image-20240127002236623](https://cdn.jsdelivr.net/gh/krystalyu88/picture/image-20240127002236623.png)

### 安装 Pandoc 工具

由于项目依赖于 Pandoc 工具，需要确保开发环境已经安装了 Pandoc 工具。

![image-20240127003027478](https://cdn.jsdelivr.net/gh/krystalyu88/picture/image-20240127003027478.png)



### 确定项目结构

一个 Node.js 项目至少包含以下几个部分：

- `src` 文件夹：存放主要的源代码。
- `tests` 文件夹：存放单元测试和集成测试的代码。
- `README.md` 文件：项目的说明文档。
- `.gitignore` 文件：列出不需要加入 Git 版本控制的文件或文件夹，比如 `node_modules`。



### 安装必要的依赖

- 安装 `execa` 来 代替 `child_process` 来调用 Pandoc 命令行工具。

  ```bash
  yarn add execa
  ```

- **安装 TypeScript**

  ```bash
  yarn add typescript @types/node --dev
  ```

  - **初始化 TypeScript 配置**

    运行以下命令生成一个 `tsconfig.json` 文件，这是 TypeScript 编译器的配置文件：

    ```
    npx tsc --init
    ```

  - **配置 `tsconfig.json`**：
    - `"target": "esnext"`：设置编译后的 JavaScript 版本。
    - `"module": "commonjs"`：设置模块系统。
    - `"outDir": "./dist"`：指定编译后的文件输出目录。
    - `"rootDir": "./src"`：指定包含 TypeScript 文件的目录。
    - `"strict": true`：启用所有严格类型检查选项。

- **使用 TypeScript**

  - 将 JavaScript 文件改为 TypeScript 文件。
  - 在 TypeScript 文件中，可以使用类型注解和其他 TypeScript 特性。



### 编写测试代码

- 安装 Jest 及其类型定义。

  ```
  yarn add jest @types/jest ts-jest --dev
  ```

- 配置 Jest 来使用 TypeScript，在 package.json 中添加或更新 Jest 配置部分

  ```
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
  ```

  

- 创建一个测试文件，命名为 `pandocjs.test.ts`，并在其中编写测试用例：

  ```
  import PandocJS from './pandocjs';
  import { existsSync, unlinkSync } from 'fs';
  
  describe('PandocJS', () => {
      const pandocJS = new PandocJS();
  
      // 示例测试：转换文档
      it('should convert a document from markdown to html', async () => {
          const sourceFilePath = 'path/to/source/file.md'; // 确保这个文件存在
          const targetFilePath = 'path/to/target/file.html';
  
          // 执行转换
          await pandocJS.convertFile({
              sourceType: 'markdown',
              sourceFilePath,
              targetType: 'html',
              targetFilePath
          });
  
          // 检查目标文件是否生成
          expect(existsSync(targetFilePath)).toBe(true);
  
          // 清理：删除测试生成的文件
          unlinkSync(targetFilePath);
      });
  
      // 其他测试...
  });
  ```

  