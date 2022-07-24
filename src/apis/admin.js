import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  categories: {
    get() {
      return apiHelper.get("/admin/categories", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    create(categoryName) {
      return apiHelper.post("/admin/categories", categoryName, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    put({ categoryId, categoryName }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, categoryName, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    get() {
      return apiHelper.get("/admin/restaurants", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    create({ formData }) {
      return apiHelper.post("/admin/restaurants", formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
  },
  getAdminUsers() {
    return apiHelper.get(`/admin/users`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  renewUserRole(id, { isAdmin }) {
    return apiHelper.put(
      `/admin/users/${id}`,
      { isAdmin },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
  },
};
