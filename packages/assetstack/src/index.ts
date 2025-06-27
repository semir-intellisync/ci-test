/**
 * Asset Stack
 * Main entry point for the assetstack package
 */

export interface Asset {
  id: string;
  name: string;
  type: string;
  size?: number;
  metadata?: Record<string, any>;
}

export interface AssetStackOptions {
  maxSize?: number;
  allowedTypes?: string[];
}

/**
 * Manages a stack of assets
 */
export class AssetStack {
  private assets: Asset[] = [];
  private maxSize: number;
  private allowedTypes: string[];

  constructor(options: AssetStackOptions = {}) {
    this.maxSize = options.maxSize || 100;
    this.allowedTypes = options.allowedTypes || [];
  }

  /**
   * Adds an asset to the stack
   * @param asset - The asset to add
   * @returns Whether the asset was added successfully
   */
  push(asset: Asset): boolean {
    if (this.assets.length >= this.maxSize) {
      return false;
    }

    if (this.allowedTypes.length > 0 && !this.allowedTypes.includes(asset.type)) {
      return false;
    }

    this.assets.push(asset);
    return true;
  }

  /**
   * Removes and returns the last asset from the stack
   * @returns The removed asset or undefined if stack is empty
   */
  pop(): Asset | undefined {
    return this.assets.pop();
  }

  /**
   * Returns the number of assets in the stack
   * @returns The size of the stack
   */
  size(): number {
    return this.assets.length;
  }

  /**
   * Returns all assets in the stack
   * @returns Array of all assets
   */
  getAll(): Asset[] {
    return [...this.assets];
  }

  /**
   * Finds an asset by ID
   * @param id - The asset ID
   * @returns The asset or undefined if not found
   */
  findById(id: string): Asset | undefined {
    return this.assets.find(asset => asset.id === id);
  }
}

/**
 * Creates a new asset stack
 * @param options - Stack configuration options
 * @returns A new AssetStack instance
 */
export function createAssetStack(options: AssetStackOptions = {}): AssetStack {
  return new AssetStack(options);
}

/**
 * Default export
 */
export default {
  AssetStack,
  createAssetStack,
};

