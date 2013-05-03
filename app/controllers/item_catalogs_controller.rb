class ItemCatalogsController < ApplicationController
  # GET /item_catalogs
  # GET /item_catalogs.json
  def index
    @item_catalogs = ItemCatalog.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @item_catalogs }
    end
  end

  # GET /item_catalogs/1
  # GET /item_catalogs/1.json
  def show
    @item_catalog = ItemCatalog.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @item_catalog }
    end
  end

  # GET /item_catalogs/new
  # GET /item_catalogs/new.json
  def new
    @item_catalog = ItemCatalog.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @item_catalog }
    end
  end

  # GET /item_catalogs/1/edit
  def edit
    @item_catalog = ItemCatalog.find(params[:id])
  end

  # POST /item_catalogs
  # POST /item_catalogs.json
  def create
    @item_catalog = ItemCatalog.new(params[:item_catalog])

    respond_to do |format|
      if @item_catalog.save
        format.html { redirect_to @item_catalog, notice: 'Item catalog was successfully created.' }
        format.json { render json: @item_catalog, status: :created, location: @item_catalog }
      else
        format.html { render action: "new" }
        format.json { render json: @item_catalog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /item_catalogs/1
  # PUT /item_catalogs/1.json
  def update
    @item_catalog = ItemCatalog.find(params[:id])

    respond_to do |format|
      if @item_catalog.update_attributes(params[:item_catalog])
        format.html { redirect_to @item_catalog, notice: 'Item catalog was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @item_catalog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /item_catalogs/1
  # DELETE /item_catalogs/1.json
  def destroy
    @item_catalog = ItemCatalog.find(params[:id])
    @item_catalog.destroy

    respond_to do |format|
      format.html { redirect_to item_catalogs_url }
      format.json { head :no_content }
    end
  end
end
