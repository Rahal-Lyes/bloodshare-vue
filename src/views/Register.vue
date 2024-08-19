<template>
     <div :class="{'pt-96': store.state.isVisible, 'pt-28':!store.state.isVisible}" >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed voluptate quasi corrupti itaque. Quibusdam, earum ex atque veniam officiis cumque, accusantium itaque, placeat consequuntur illo exercitationem. Architecto reiciendis repudiandae voluptatibus? Ducimus cum quia laborum, eveniet deleniti exercitationem quidem. Sed, itaque! Debitis commodi ipsam repellat ducimus sint. Beatae pariatur fugiat officiis quod veritatis quae, repellat esse eaque obcaecati qui laborum nihil et fugit maiores? Expedita ullam accusantium, nostrum tenetur reiciendis asperiores pariatur, qui odio sapiente ipsum quos saepe. Alias temporibus, vitae earum maxime quibusdam aspernatur, soluta sunt minus, fugiat nobis iste! Quaerat illum neque voluptatem alias laboriosam quia officiis veniam minus ex possimus amet perferendis cumque facere corporis asperiores, adipisci exercitationem aliquid earum molestias quasi esse blanditiis. Deserunt nesciunt dolores inventore eligendi, illo provident quidem nihil, molestias placeat ducimus accusantium, ipsum culpa fugit voluptas expedita in corrupti error alias corporis autem consequatur! Vel, unde cum dolor maxime culpa repellat? Ex rem aspernatur similique repellat vitae culpa, quis voluptates animi enim doloremque quibusdam magni, debitis veniam cupiditate deleniti reprehenderit exercitationem? Aut vero possimus voluptatibus laboriosam molestias quia aliquam beatae ipsam! Cum, quo voluptates qui aliquid itaque tempora. Voluptate nihil optio corrupti nam placeat fuga animi ad provident, suscipit quidem eligendi architecto.</p>
</div>
</template>


<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>