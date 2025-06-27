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

export class AssetStack {
  private assets: Asset[] = [];
  private maxSize: number;
  private allowedTypes: string[];

  constructor(options: AssetStackOptions = {}) {
    this.maxSize = options.maxSize || 100;
    this.allowedTypes = options.allowedTypes || [];
  }

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

  pop(): Asset | undefined {
    return this.assets.pop();
  }

  size(): number {
    return this.assets.length;
  }

  getAll(): Asset[] {
    return [...this.assets];
  }

  findById(id: string): Asset | undefined {
    return this.assets.find(asset => asset.id === id);
  }
}

export function createAssetStack(options: AssetStackOptions = {}): AssetStack {
  return new AssetStack(options);
}

export default {
  AssetStack,
  createAssetStack,
};

